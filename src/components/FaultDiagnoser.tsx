import { useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Symptom -> likely area.
 *
 * A symptom points at a suspect, not a verdict: the copy says so, and the
 * only outcome offered is sending the unit in for the written diagnostic.
 * Symptom labels are the exact option strings used by RepairTriageForm, so
 * the chosen one can be handed straight to the form.
 */

export const PREFILL_FAULT_EVENT = "aarya:prefill-fault";

interface Symptom {
  fault: string;   // must match a faultOptions entry in RepairTriageForm
  short: string;   // button label
  suspects: string[];
  why: string;
  ruleOut: string;
}

const symptoms: Symptom[] = [
  {
    fault: "No power — unit completely dead",
    short: "Completely dead",
    suspects: ["Main board — power / PoE stage"],
    why: "No link light and no boot usually means power is not getting past the input stage, often after a surge.",
    ruleOut: "Try a known-good cable and switch port, or a different PoE injector, before pulling the camera down.",
  },
  {
    fault: "No image / black screen",
    short: "No image",
    suspects: ["Lens and sensor module", "Main board"],
    why: "If the camera is reachable on the network but sends a black picture, the fault sits between the sensor and the board that processes it.",
    ruleOut: "Open the camera's own web page. A picture there means the problem is at the recorder, not the camera.",
  },
  {
    fault: "PTZ fault — motor, zoom or drive",
    short: "PTZ won't move",
    suspects: ["Pan / tilt / zoom motors", "Drive board"],
    why: "Grinding, drifting or a unit that fails its start-up sweep points at the motors, their belts or gears, or the board that drives them.",
    ruleOut: "Check the control settings — protocol, address and baud rate on older units — and that nothing is physically blocking travel.",
  },
  {
    fault: "Night vision / IR illuminator failure",
    short: "Dark at night",
    suspects: ["IR LED ring", "IR-cut filter in the lens module"],
    why: "Fine by day and dark or patchy after sunset means the illuminator or its driver. A pink daytime image points at the filter instead.",
    ruleOut: "Clean the dome, and confirm IR or day/night mode has not been switched off in the settings.",
  },
  {
    fault: "Intermittent — reboots or drops out",
    short: "Reboots / drops out",
    suspects: ["Main board — power stage", "Connectors and cable tail"],
    why: "A camera that restarts under load — often when IR switches on at dusk — is usually short of clean power.",
    ruleOut: "Check the switch's PoE budget and the cable run length before blaming the camera.",
  },
  {
    fault: "Network fault — no stream, not reachable",
    short: "Not on the network",
    suspects: ["Main board — Ethernet port"],
    why: "Powered up but invisible on the network often means the network port took a surge.",
    ruleOut: "Swap the cable and switch port, and rule out an IP address conflict.",
  },
  {
    fault: "Image quality — blur, discolouration, focus",
    short: "Blurred or off-colour",
    suspects: ["Lens and sensor module", "Dome cover"],
    why: "Soft focus, colour casts and haze come from the optics: the lens, the IR-cut filter or the dome in front of them.",
    ruleOut: "Clean the dome inside and out and re-run focus if the camera supports it.",
  },
  {
    fault: "Physical or weather damage",
    short: "Water or impact",
    suspects: ["Housing and seals", "Any board the water reached"],
    why: "Once moisture is inside, the visible damage is rarely the whole story — corrosion keeps working on the boards.",
    ruleOut: "Power it down and leave it off. Running a wet camera turns a seal problem into a board problem.",
  },
];

const FaultDiagnoser = () => {
  const [picked, setPicked] = useState<number | null>(null);
  const s = picked === null ? null : symptoms[picked];

  const sendToForm = () => {
    if (!s) return;
    window.dispatchEvent(new CustomEvent(PREFILL_FAULT_EVENT, { detail: s.fault }));
    document.getElementById("repair-enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-secondary mb-4">
          Fault finder
        </p>
        <h2 className="text-3xl/[1.1] lg:text-5xl/[1.05] font-semibold tracking-tight mb-5 text-balance">
          What is the camera <span className="text-secondary">doing?</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
          Pick the closest symptom. You'll get the usual suspects and one thing worth
          checking on site first. It is a pointer, not a diagnosis — that comes in
          writing once the unit is on the bench.
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Symptoms">
          {symptoms.map((sym, i) => (
            <button
              key={sym.fault}
              type="button"
              aria-pressed={picked === i}
              onClick={() => setPicked(i)}
              className={`px-4 py-2.5 rounded-md border text-sm font-medium transition-colors duration-200 ${
                picked === i
                  ? "border-secondary bg-secondary text-secondary-foreground"
                  : "border-border text-foreground/80 hover:border-secondary/60 hover:text-secondary"
              }`}
            >
              {sym.short}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7" aria-live="polite">
        <div className="h-full min-h-[300px] rounded-md border border-border bg-card p-6 sm:p-9 flex flex-col justify-center">
          {!s ? (
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/70">
              ← Select a symptom
            </p>
          ) : (
            <div key={s.fault} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Usual suspects
              </p>
              <ul className="mb-6 space-y-1.5">
                {s.suspects.map((x) => (
                  <li key={x} className="text-xl sm:text-2xl font-semibold tracking-tight font-display">
                    {x}
                  </li>
                ))}
              </ul>
              <p className="text-foreground/75 leading-relaxed mb-6 max-w-xl">{s.why}</p>
              <div className="border-l border-secondary/60 pl-4 mb-8 max-w-xl">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  Check first
                </p>
                <p className="text-sm text-foreground/75 leading-relaxed">{s.ruleOut}</p>
              </div>
              <button
                type="button"
                onClick={sendToForm}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-110 transition-all duration-200"
              >
                Send it in for diagnosis <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaultDiagnoser;

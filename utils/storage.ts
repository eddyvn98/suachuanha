
import { RepairCase, RepairJob } from '../types';

const KEY = 'repair_jobs_v2';
const CUSTOM_CASES_KEY = 'custom_repair_cases';

// --- Jobs ---

export const getJobs = (): RepairJob[] => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
};

export const saveJob = (job: RepairJob) => {
  const jobs = getJobs();
  const idx = jobs.findIndex(j => j.id === job.id);
  if (idx >= 0) jobs[idx] = job;
  else jobs.unshift(job); // Add new to top
  localStorage.setItem(KEY, JSON.stringify(jobs));
  return job;
};

export const createJob = (caseId: string, caseLabel: string, caseIcon: string, recommendedTrialIds: string[], answers: Record<string, boolean>): RepairJob => {
  const job: RepairJob = {
    id: `job-${Date.now()}`,
    caseId, caseLabel, caseIcon,
    status: 'SELF_FIXING',
    currentStep: 0,
    currentTrialId: recommendedTrialIds[0],
    recommendedTrialIds,
    answers,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  return saveJob(job);
};

export const deleteJob = (id: string) => {
  const jobs = getJobs().filter(j => j.id !== id);
  localStorage.setItem(KEY, JSON.stringify(jobs));
};

// --- Custom Cases ---

export const getCustomCases = (): RepairCase[] => {
  try {
    const data = localStorage.getItem(CUSTOM_CASES_KEY);
    if (!data) return [];
    const rawCases = JSON.parse(data);
    return rawCases.map((c: any) => {
      // Rehydrate evaluate function
      if (c.evaluateString) {
        try {
          // eslint-disable-next-line
          const evalFn = new Function('return ' + c.evaluateString)();
          return { ...c, evaluate: evalFn };
        } catch (e) {
          console.error("Failed to parse evaluate function for case", c.id, e);
          return c;
        }
      }
      return c;
    });
  } catch { return []; }
};

export const saveCustomCase = (repairCase: RepairCase) => {
  const cases = getCustomCases();
  // Remove existing case with same ID if any
  const filtered = cases.filter(c => c.id !== repairCase.id);
  
  // Serialize evaluate function
  const caseToSave: any = { ...repairCase };
  if (typeof repairCase.evaluate === 'function') {
    caseToSave.evaluateString = repairCase.evaluate.toString();
    delete caseToSave.evaluate;
  }

  filtered.push(caseToSave);
  localStorage.setItem(CUSTOM_CASES_KEY, JSON.stringify(filtered));
};

export const deleteCustomCase = (id: string) => {
    const cases = getCustomCases();
    const filtered = cases.filter(c => c.id !== id);
    // We need to re-serialize functions before saving back
    const toSave = filtered.map((c: any) => {
        const copy = { ...c };
        if (typeof c.evaluate === 'function') {
            copy.evaluateString = c.evaluate.toString();
            delete copy.evaluate;
        }
        return copy;
    });
    localStorage.setItem(CUSTOM_CASES_KEY, JSON.stringify(toSave));
};

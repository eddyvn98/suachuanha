
export type DiagnosisLevel = 'green' | 'yellow' | 'red';

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface DiagnosisResult {
  level: DiagnosisLevel;
  title: string;
  message: string;
  recommendedTrialIds: string[];
}

export interface Trial {
  id: string;
  title: string;
  when: string;
  steps: string[];
}

export interface RepairCase {
  id: string;
  area: string;      // e.g., 'water', 'electric'
  category: string;  // e.g., 'sink', 'toilet'
  label: string;
  icon: string;
  description: string;
  checklist: ChecklistItem[];
  trials: Trial[];
  evaluate?: (answers: Record<string, boolean>) => DiagnosisResult; 
  meta?: {
    allowSkipChecklist?: boolean;
    createdBy?: string;
    version?: number;
  }
}

export interface RepairJob {
  id: string;
  caseId: string;
  caseLabel: string;
  caseIcon: string;
  status: 'SELF_FIXING' | 'NEED_PRO' | 'DONE' | 'CANCELLED';
  currentStep: number; // Index in recommendedTrialIds
  currentTrialId: string | null;
  recommendedTrialIds: string[];
  failedTrialIds?: string[]; // Track failed attempts
  answers: Record<string, boolean>;
  createdAt: string;
  updatedAt: string;
}

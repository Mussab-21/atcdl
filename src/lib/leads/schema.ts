import { z } from "zod";

export const LeadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(150, "Email cannot exceed 150 characters")
    .trim()
    .toLowerCase(),
  company: z.string().max(150).optional().or(z.literal("")),
  projectType: z.string().min(2, "Please select an offering"),
  problem: z
    .string()
    .min(20, "Please describe your business problem in at least 20 characters")
    .max(3000, "Problem description cannot exceed 3,000 characters")
    .trim(),
  existingSystems: z.string().max(1000).optional().or(z.literal("")),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  source: z.string().max(100).optional(),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
  turnstileToken: z.string().optional(),
});

export type LeadInput = z.infer<typeof LeadSchema>;

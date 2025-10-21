import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Type definitions for our form submissions
export interface FormSubmission {
  id?: number;
  name: string;
  email: string;
  phone: string;
  created_at?: string;
}

// Function to save form submission to Supabase
export async function saveFormSubmission(
  data: Omit<FormSubmission, "id" | "created_at">
) {
  try {
    const { data: result, error } = await supabase
      .from("submissions")
      .insert([data])
      .select();

    if (error) {
      console.error("Error saving submission:", error);
      throw error;
    }

    return result;
  } catch (error) {
    console.error("Error in saveFormSubmission:", error);
    throw error;
  }
}

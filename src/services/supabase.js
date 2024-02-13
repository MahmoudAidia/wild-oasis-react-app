import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cosvnlrvutdbwpfcdwbe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvc3ZubHJ2dXRkYndwZmNkd2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMzEyMDEsImV4cCI6MjAyMjgwNzIwMX0.1_Agsbaq1EDS-aWAPRxdPcnpzmpLUM4Blt7wzyaFoy0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

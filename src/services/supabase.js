import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://cosvnlrvutdbwpfcdwbe.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvc3ZubHJ2dXRkYndwZmNkd2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMzEyMDEsImV4cCI6MjAyMjgwNzIwMX0.1_Agsbaq1EDS-aWAPRxdPcnpzmpLUM4Blt7wzyaFoy0";

export const supabaseUrl = "https://gpqdrvjrxhtnygzhayrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcWRydmpyeGh0bnlnemhheXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NTAzODEsImV4cCI6MjA4NzQyNjM4MX0.9zHjq5KcdQSAsIpSqS4IAH1epgIl39_7sKJuoSyR8P0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

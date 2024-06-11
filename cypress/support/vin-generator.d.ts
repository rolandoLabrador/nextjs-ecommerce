// cypress/support/vin-generator.d.ts
declare module 'vin-generator' {
    export function generateVIN(): string;
    export function validateVIN(vin: string): boolean;
  }
  // delete if vin generator is not working
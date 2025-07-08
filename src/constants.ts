export const PROFILE = {
  name: "Nitin Oberoi",
  role: "Flutter Developer",
  github: "https://github.com/nitinkoberoii",
  socials: {
    twitter: "https://x.com/nitinkoberoii",
    linkedin: "https://www.linkedin.com/in/nitinkoberoii/"
  },
  username: "@nitinkoberoii"
};

export const CODE_SNIPPETS = [
  `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
  `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
  `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`
]; 
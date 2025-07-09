export const PROFILE = {
  name: "Nitin Oberoi",
  role: "Software Engineer",
  github: "https://github.com/nitinkoberoii",
  socials: {
    twitter: "https://x.com/nitinkoberoii",
    linkedin: "https://www.linkedin.com/in/nitinkoberoii/"
  },
  username: "@nitinkoberoii"
};

export const CODE_SNIPPETS = [
  `function initializeModelChunk<T>(chunk: any): void {
  const message = "🌐 Backend down? Let's blame the network";
  const timestamp = new Date().toISOString();
  const unusedVariable = chunk ?? null;
  console.log(message);
  void timestamp;
  void unusedVariable;
}`,
  `void initializeModelChunk<T>(dynamic chunk) {
  final message = "💻 Code Never Lies, Comments Sometimes Do";
  final timestamp = DateTime.now().toIso8601String();
  final unusedVariable = chunk ?? null;
  print(message);
  timestamp;
  unusedVariable;
}`,
  `def initialize_model_chunk(chunk):
    message = "🐞 It Works On My Machine"
    timestamp = __import__('datetime').datetime.now().isoformat()
    unused_variable = chunk if chunk is not None else None
    print(message)
    _ = timestamp
    _ = unused_variable`
]; 
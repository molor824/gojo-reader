export function speak(str: string) {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(str);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[2]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}

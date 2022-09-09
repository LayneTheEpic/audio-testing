export type AudioContextCapsule = {
	audioContext: AudioContext;
	audioFrequencyAnalyzer: AnalyserNode;
};



export type AveragingBucket = {
	occurrences: number;
	offset: number;
	value: number;
	values: number[];
};



export type BeatData = {
	beatDistance: number;
	offset: number;
	tempo: number;
};



export type ProcessedAudioFileData = {
	audioBuffer: AudioBuffer;
	audioElement: HTMLAudioElement;
};

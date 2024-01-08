function getSoundAPI(frequency, intensity, duration, speakerSide) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sampleRate = audioContext.sampleRate;
    const numSamples = duration * sampleRate;
    const buffer = audioContext.createBuffer(2, numSamples, sampleRate);

    const dataL = buffer.getChannelData(0);
    const dataR = buffer.getChannelData(1);
    for (let i = 0; i < numSamples; i++) {
        const time = i / sampleRate;
        const sampleValue = (4 * 10 ^ (((intensity + standard_audiometric_reference[i]) / 20) - 5)) * Math.sin(2 * Math.PI * frequency * time);
        dataL[i] = sampleValue;
        dataR[i] = sampleValue;
    }

    if (speakerSide === "left") {
        dataR.fill(0);
    } else if (speakerSide === "right") {
        dataL.fill(0);
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();

    setTimeout(() => source.stop(), duration * 1000);
}


const standard_audiometric_reference = [7, 6, 5, 0, -2, -2, -1, -2, -1, 1];
const reference_frequency = [250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
const reference_intensity_db = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];


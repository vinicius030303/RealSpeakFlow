const EventEmitter = require('events');

class IsSilence extends EventEmitter {
  constructor(threshold = 0.01, requiredSilenceChunks = 5) {
    super();
    this.threshold = threshold;
    this.requiredSilenceChunks = requiredSilenceChunks;
    this.silenceChunks = 0;
  }

  analyze(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i += 2) {
      const val = data.readInt16LE(i);
      sum += val * val;
    }

    const rms = Math.sqrt(sum / (data.length / 2)) / 32768;

    if (rms < this.threshold) {
      this.silenceChunks++;
      this.emit('silence', this.silenceChunks);
      if (this.silenceChunks >= this.requiredSilenceChunks) {
        this.emit('done');
      }
    } else {
      this.silenceChunks = 0;
      this.emit('sound');
    }
  }
}

module.exports = IsSilence;

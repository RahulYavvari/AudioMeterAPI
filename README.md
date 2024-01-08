# GenerateSoundAPI Docs

#### GenerateSoundAPI [CDN]: 
```
https://cdn.jsdelivr.net/gh/RahulYavvari/AudioMeterAPI@main/generateSoundAPI.min.js
```


## Static Data (For application flow)
1. ```reference_frequency```\
   It has the range of frequencies in Hz over which the user will be tested.\
   `[250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000]`

2. ```reference_intensity_db```\
   It has the range of intensities in decibles(dB) over over which a particular frequency will be modulated and tested on the user.\
   `[-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]`

## Function: getSoundAPI()
Input(s): `frequency`, `intensity`, `duration`

```
getSoundAPI(<frequency(Hz)>, <intensity(dB)>, <duration(s)>)
```

Output: It plays a single tone pure sinusoid from the speaker with the parameters given to the function as input.

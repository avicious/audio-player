# Modern Glassmorphism Audio Player

A high-performance, visually stunning React audio player component built with **Lucide React** icons and **CSS Modules**. This player features a fluid seeking experience, real-time duration tracking, and a premium "frosted glass" aesthetic.

## 🚀 Features

- **Glassmorphism Design:** Semi-transparent backgrounds with `backdrop-filter` blur and subtle borders.
- **Fluid Seeking:** High-granularity range input (`step="0.01"`) for ultra-smooth dragging.
- **Dynamic Progress Fill:** Visual track "filling" effect using CSS linear gradients.
- **Smart Metadata:** Automatically handles audio duration to prevent `NaN` errors during load.
- **Auto-Reset:** Automatically toggles the Play/Pause state when the track finishes.

## 🏗️ Technical Implementation

## Logic Flow

- **`onLoadedMetadata`**: Triggered as soon as the browser reads the file's duration, ensuring the slider `max` value is set correctly.
- **`onTimeUpdate`**: Syncs the React `currentTime` state with the native HTML5 audio API for real-time progress.
- **Smooth Seeking**: Uses `step="0.01"` on the range input to provide sub-second granularity, making the thumb glide rather than jump.

## Visual Architecture

The player uses specific CSS pseudo-elements to ensure a consistent look across different browsers:

- **`::-webkit-slider-thumb`**: For Chrome, Safari, and Edge.
- **`::-moz-range-thumb`**: For Firefox.

## Progress Calculation

The fill effect is calculated dynamically in the JSX to create the "active" track color:

$$\text{Progress \%} = \left( \frac{\text{currentTime}}{\text{duration}} \right) \times 100$$

## 📦 Installation

Ensure you have the required icon library installed in your project:

```bash
npm install lucide-react
```

## 🛠️ Usage

Import the component and pass a valid audio URL or local file path as the `audioSrc` prop.

```javascript
import AudioPlayer from "./components/AudioPlayer";
import audio from "./assets/song.mp3";

function App() {
  return (
    <div className="container">
      <AudioPlayer audioSrc={audio} />
    </div>
  );
}
```

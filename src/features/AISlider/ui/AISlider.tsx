import { Slider } from 'shared/components/Slider';
import HuggingFaceIcon from 'shared/icons/hugging-face.svg';
import KerasIcon from 'shared/icons/keras.svg';
import OpenAiIcon from 'shared/icons/open-ai.svg';
import PyTorchIcon from 'shared/icons/py-torch.svg';
import ScikitLearnIcon from 'shared/icons/scikit-learn.svg';
import TensorflowIcon from 'shared/icons/tensorflow.svg';

import './ai-slider.scss';

const aiSlides = [
  { key: 'pyTorch', icon: <PyTorchIcon /> },
  { key: 'huggingFace', icon: <HuggingFaceIcon /> },
  { key: 'openAI', icon: <OpenAiIcon /> },
  { key: 'scikitLearn', icon: <ScikitLearnIcon /> },
  { key: 'kerasIcon', icon: <KerasIcon /> },
  {
    key: 'etc',
    icon: (
      <div style={{ transform: 'scale(1.5)' }}>
        <TensorflowIcon />
      </div>
    ),
  },
];

const AISlider = () => {
  return (
    <section className="ai-slides__container">
      <Slider slides={aiSlides} />
    </section>
  );
};

export default AISlider;

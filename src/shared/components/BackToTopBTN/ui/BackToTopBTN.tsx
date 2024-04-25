import { TextButton } from 'shared/components/TextButton';
import ArrowTopIcon from 'shared/icons/arrow-top.svg';
import { handleScrollToTop } from 'shared/utils';

const BackToTopBTN = () => {
  return (
    <TextButton onClick={handleScrollToTop}>
      <ArrowTopIcon />
      Back to top
    </TextButton>
  );
};

export default BackToTopBTN;

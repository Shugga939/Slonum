import './SubscriptionSection.scss'
import { FC, useRef } from 'react';
import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomCheckbox from '../../ui/CustomCheckbox/CustomCheckbox';

const SubscriptionSection: FC = () => {

  const emailRef = useRef<HTMLInputElement>(null)
  const checkBoxRef = useRef<HTMLInputElement>(null)

  return (
    <section className="subscriptionSection">
      <div className="subscriptionSection__wrapper">
        <h2 className="subscriptionSection__title">
          Подпишись на нашу рассылку
        </h2>
        <p className="subscriptionSection__subtitle">
          Обещаем присылать только самое важное <br /> и интересное <b>:)</b>
        </p>
        <form className="subscriptionSection__form">
          <CustomInput placeholder="Email" forwardRef={emailRef} />
          <CustomButton color="mainAccent" type="submit" text="Отправить" />
          <CustomCheckbox linksColor="whiteColor" forwardRef={checkBoxRef} />
        </form>
      </div>
    </section>
  );
}

export default SubscriptionSection;

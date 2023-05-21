import styles from "./Bill.module.css";
import Image from "next/image";
import picture from "../../../public/path2.svg";
import { useState, ChangeEvent, useMemo } from "react";

const Bill = () => {
  const [value, setValue] = useState(50);
  const [discount, setDiscount] = useState(1);
  const [elementWidth, setElementWidth] = useState(50);

  const valueHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    setValue(value);
    setElementWidth(value);
  };

  const switchHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const switchValue = event.currentTarget.checked;
    if (switchValue) {
      setDiscount(() => 0.75);
    } else {
      setDiscount(() => 1);
    }
  };

  const priceMounth = useMemo(() => {
    return Number(0.32 * value * discount).toFixed(2);
  }, [value, discount]);

  const numberOfViews = useMemo(() => {
    return Number(value * 2).toFixed(0);
  }, [value]);

  return (
    <div className={styles.billInfo}>
      <div className={styles.pagesViews}>{numberOfViews}K PAGEVIEWS</div>
      <div className={styles.billMonth}>
        {priceMounth} <span className={styles.month}> / month</span>
      </div>
      <div className={styles.inputProgress}>
        <div>
          <input
            id="label"
            className={styles.progress}
            type="range"
            name="bill"
            min="0"
            max="100"
            step="1"
            onChange={valueHandle}
          />
        </div>

        <div
          id="line"
          className={styles.line}
          style={{ width: `${elementWidth}%` }}
        ></div>
      </div>

      <div className={styles.billing}>
        <div className={styles.text1}>Monthly Billing</div>
        <div className={styles.switch}>
          <label htmlFor="id_input">
            <input
              id="id_input"
              type="checkbox"
              onChange={switchHandle}
            ></input>
            <div className={styles["switch-labels"]}></div>
          </label>
        </div>
        <div className={styles.yearlyBilling}>Yearly Billing</div>
        <div className={styles.discount}>25% discount</div>
      </div>

      <div className={styles.advantages}>
        <div>
          <Image
            className={styles.picture}
            src={picture}
            alt="picture"
            width={8}
            height={8}
          ></Image>
          Unlimited website
        </div>
        <div>
          <Image
            className={styles.picture}
            src={picture}
            alt="picture"
            width={8}
            height={8}
          ></Image>
          100% data ownership
        </div>
        <div>
          <Image
            className={styles.picture}
            src={picture}
            alt="picture"
            width={8}
            height={8}
          ></Image>
          Email reports
        </div>
      </div>
      <div className={styles.startButton}>Start my trial</div>
    </div>
  );
};

export default Bill;

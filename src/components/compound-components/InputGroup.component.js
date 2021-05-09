import React from "react";
import classNames from "classnames";
import styles from "./InputGroup.component.module.css";

const InputGroupContext = React.createContext();

const useInputGroupContext = () => {
      const context = React.useContext(InputGroupContext);
      if (!context) {
            throw new Error(
                  `InputGroup compound components cannot be rendered outside the InputGroup component`
            );
      }
      return context;
};

const Label = ({ className, ...props }) => {
      const context = React.useContext(InputGroupContext);

      return (
            <label
                  htmlFor={context.id}
                  className={classNames(
                        styles.label,
                        styles.inputGroupItem,
                        styles.label,
                        className
                  )}
            >
                  {props.children}
            </label>
      );
};

const Item = ({ className, ...props }) => {
      return (
            <div className={classNames(styles.inputGroupItem, className)}>
                  {props.children}
            </div>
      );
};

const Input = ({ className, ...props }) => {
      const { id, value, onChange } = useInputGroupContext();

      return (
            <input
                  className={classNames(styles.inputGroupItem, styles.input)}
                  id={id}
                  value={value}
                  onChange={onChange}
            />
      );
};

export const InputGroup = (props) => {
      return (
            <InputGroupContext.Provider value={props}>
                  <div className={styles.container}>{props.children}</div>
            </InputGroupContext.Provider>
      );
};

InputGroup.Label = Label;
InputGroup.Item = Item;
InputGroup.Input = Input;

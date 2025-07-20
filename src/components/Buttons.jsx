import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Buttons = (props) => {
  return (
    <>
      <button
        onClick={() =>
          props.handleCalculation(props.btns.label, props.btns.type)
        }
        className={` active:scale-95 active:opacity-80 ${
          ["7", "8", "9", "4", "5", "6", "1", "2", "3", "."].includes(
            props.btns.label
          )
            ? "w-16 h-16 bg-[#303137] text-3xl text-[#2CA7FB] font-semibold rounded-lg"
            : ""
        }
        ${
          ["1"].includes(props.btns.label)
            ? "absolute top-[19.5rem] left-4"
            : ""
        }
        ${
          ["2"].includes(props.btns.label)
            ? "absolute top-[19.5rem] left-24"
            : ""
        }
        ${
          ["3"].includes(props.btns.label)
            ? "absolute top-[19.5rem] left-45"
            : ""
        }

        ${
          ["."].includes(props.btns.label) ? "absolute top-[25rem] left-45" : ""
        }

        ${
          ["%", "( )", "pow", "deg"].includes(props.btns.label)
            ? "text-[#2CA7FB] bg-[#303137]  rounded-full font-semibold w-14 h-10 py-1 px-2"
            : ""
        }
        ${
          ["C"].includes(props.btns.label)
            ? "bg-red-600/70 text-white w-16 h-16 text-2xl font-semibold rounded-lg"
            : ""
        }
        ${
          ["D"].includes(props.btns.label)
            ? "bg-white/70 text-red-600 w-16 h-16 text-2xl rounded-lg"
            : ""
        }
        ${
          ["="].includes(props.btns.label)
            ? " absolute text-2xl text-white font-semibold h-30 w-16 rounded-lg bg-[#2CA7FB] top-[21.5rem] right-3"
            : ""
        }
        ${
          ["+"].includes(props.btns.label)
            ? "text-2xl text-white font-semibold h-25 w-16 rounded-lg bg-[#2CA7FB]"
            : ""
        }
        ${
          ["/", "*", "-"].includes(props.btns.label)
            ? "text-2xl font-semibold h-16 w-16 text-white rounded-lg bg-[#2CA7FB]"
            : ""
        }

        ${
          ["0"].includes(props.btns.label)
            ? "bg-[#303137] text-2xl text-[#2CA7FB] font-semibold h-16 w-37 rounded-lg absolute top-[25rem] left-4"
            : ""
        }`}
      >
        {props.btns.icon ? (
          <FontAwesomeIcon icon={props.btns.icon} className="" size="md" />
        ) : (
          props.btns.label
        )}
      </button>
    </>
  );
};

export default Buttons;

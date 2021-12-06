import CHAT_INPUT from "./class/CHAT_INPUT";
import MESSAGE from "./class/MESSAGE";
import USER from "./class/USER";

function SlashOptions(type: "CHAT_INPUT" | 1): CHAT_INPUT;
function SlashOptions(type: "USER" | 2): USER;
function SlashOptions(type: "MESSAGE" | 3): MESSAGE;
function SlashOptions(): null;

function SlashOptions(type?: "CHAT_INPUT" | "USER" | "MESSAGE" | number) {
  if (type === "CHAT_INPUT") return new CHAT_INPUT();
  else if (type === "USER" || type === 2) return new USER();
  else if (type === "MESSAGE" || type === 3) return new MESSAGE();
  else return null;
}

export = { SlashOptions };

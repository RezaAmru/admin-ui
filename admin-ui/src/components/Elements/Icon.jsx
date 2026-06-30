import { createElement } from "react";
import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Bill.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import DetailSVG from "../../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icons/Icon2.svg?react";

const createIcon =
  (SVG) =>
  ({ size = 24, color = "currentColor", ...props }) =>
    createElement(SVG, {
      height: size,
      stroke: color,
      width: size,
      ...props,
    });

const Icon = {
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),
  Adobe: createIcon(BillSVG),
  Figma: createIcon(DetailSVG),
  Food: createIcon(ExpenseSVG),
  Gamepad: createIcon(ExpenseSVG),
  House: createIcon(BalanceSVG),
  Movie: createIcon(ExpenseSVG),
  Other: createIcon(DetailSVG),
  Shopping: createIcon(TransactionSVG),
  Transport: createIcon(TransactionSVG),
  ArrowRight: createIcon(ChevronRightSVG),
  ArrowDown: createIcon(ChevronRightSVG),
  ArrowUp: createIcon(ChevronRightSVG),
  ArrowUpRight: createIcon(ChevronRightSVG),
  Edit: createIcon(DetailSVG),
  Mastercard: createIcon(BillSVG),
  Visa: createIcon(BillSVG),
  Target: createIcon(GoalSVG),
  Award: createIcon(GoalSVG),
};

export default Icon;

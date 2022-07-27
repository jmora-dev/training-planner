import "./selectorWrapper.css";

interface SelectorWrapperProps {
  children: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

export default function SelectorWrapper({
  children,
  isSelected,
  onSelect,
}: SelectorWrapperProps) {
  return (
    <div
      onClick={onSelect}
      className={
        "selector-wrapper__container" + (isSelected ? " is-selected" : "")
      }
    >
      {isSelected && (
        <div className="selector-wrapper__icon">
          <i className="fa-solid fa-circle-check" aria-label="selected"></i>
        </div>
      )}
      {children}
    </div>
  );
}

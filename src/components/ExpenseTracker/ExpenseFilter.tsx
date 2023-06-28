import { categories } from "./ExpenseForm";

interface Props {
  onSelectCategory: (category: string) => void;
}
export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <label htmlFor="category" className="form-label">
        Filter by category
      </label>
      <select
        id="filter"
        className="form-select"
        onChange={(event) => {
          onSelectCategory(event.target.value);
        }}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

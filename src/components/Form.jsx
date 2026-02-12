import { Loader } from "lucide-react";
import { Button } from "./Button";

export const Form = ({
  title,
  onSubmit,
  children,
  isValid = true,
  isSubmitting = false,
  hasSubmitButton = false,
}) => {
  return (
    <div className="max-w-96 w-full h-full px-2.5">
      <h1 className="text-center text-2xl font-bold my-5">{title}</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-5 mb-5">
        {children}
        {hasSubmitButton && (
          <Button
            type="submit"
            textContent={
              isSubmitting ? (
                <Loader strokeWidth={1.5} size={16} className="m-auto" />
              ) : (
                "submit"
              )
            }
            disabled={!isValid || isSubmitting}
          />
        )}
      </form>
    </div>
  );
};

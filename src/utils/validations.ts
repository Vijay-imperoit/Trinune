export const trimInput = (name: string, value: string): string => {
    if (name === "name") {
      value = value.slice(0, 60);
    } else if (name === "phone") {
      value = value.replace(/[^\d]/g, "");
      value = value.slice(0, 13);
    }
    if (
      name === "name" ||
      name === "email" || name === "message"
    ) {
      return value.trimLeft();
    } else {
      return value.trim();
    }
  };
  
  export function validateField(name: string, value: string): boolean {
    switch (name) {
      case "name":
        return /^[a-zA-Z\d\s]*$/.test(value) || value === "" ? false : true;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value === ""
          ? false
          : true;
          case "phone":
            return /^(\+?\d{1,3}[\s\-]?)?(\(?\d{1,4}\)?[\s\-]?)?[\d\-]{7,10}$/.test(value) || value === ""
              ? false
              : true;
            // return /^(\d{1,3}[\s\-]?)?(\(?\d{1,4}\)?[\s\-]?)?[\d\-]{7,10}$/.test(value) || value === ""
    // ? false
    // : true;
      default:
        return false;
    }
  }
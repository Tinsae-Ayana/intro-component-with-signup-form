export const validate = (formData) => {
   var isValid = true;
   var pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (formData.get("firstName") == "") {
      reStyleForm({
         className: "firstNameError",
         id: "firstName",
         isEmail: false,
      });
      isValid = false;
   }
   if (formData.get("lastName") == "") {
      reStyleForm({
         className: "lastNameError",
         id: "lastName",
         isEmail: false,
      });
      isValid = false;
   }
   if (formData.get("password") == "") {
      reStyleForm({
         className: "passwordError",
         id: "password",
         isEmail: false,
      });
      isValid = false;
   }
   if (!pattern.test(formData.get("emailAddress"))) {
      reStyleForm({
         className: "emailError",
         id: "emailAddress",
         isEmail: true,
      });
      isValid = false;
   }

   return isValid;
};

export const reStyleForm = ({ className, id, isEmail }) => {
   var elementCollection = document.getElementsByClassName(className);
   for (var index = 0; index < elementCollection.length; index++) {
      elementCollection.item(index).classList.replace("invisible", "visible");
   }
   document.getElementById(id).classList.replace("border-grayishBlue", "border-proRed");
   if (isEmail) {
      document.getElementById(id).classList.replace("text-darkBlue", "text-proRed");
      document.getElementById(id).placeholder = "";
   } else {
      document.getElementById(id).placeholder = "";
   }
};

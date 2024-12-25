import { useUser } from "@clerk/clerk-react";

const { user } = useUser();
console.log(user?.unsafeMetadata);

const handleShoppingCart = () => {
  if (!user) return;
  const metadata = user.unsafeMetadata;
  if (!metadata.cart) metadata.cart = {};
  if (metadata.cart[id]) delete metadata.cart[id];
  else metadata.cart[id] = 1;

  user
    .update({ unsafeMetadata: metadata })
    .then(() => console.log("Success"));
};

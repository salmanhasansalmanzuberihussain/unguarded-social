import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
          </SignInButton>
      </SignedOut>
      <UserButton></UserButton>
    </div>
  )
}
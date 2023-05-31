/** @format */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Provider from "./Provider";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setproviderfunc = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setproviderfunc();
  }, []);

  return (
    <nav className='container w-full pt-3 mx-auto mb-16 flex-between'>
      <Link href='/' className='z-20 flex gap-2 flex-center '>
        <Image
          src='/assets/images/logo.svg'
          width={60}
          height={60}
          className='object-contain '
          alt='promtopia logo'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* desktop Navigation */}
      <div className='hidden sm:flex !z-50 '>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='create-prompt' className='black_btn'>
              Create Post
            </Link>
            <button onClick={signOut} className='outline_btn' type='button'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                className='rounded-full'
                width={40}
                height={40}
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      <div className='relative flex sm:hidden '>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              className='rounded-full'
              width={40}
              height={40}
              alt='profile'
              onClick={() => setToggle((prev) => !prev)}
            />
            {/* toggle button */}

            {toggle && (
              <div className='dropdown !z-20'>
                <Link
                  onClick={() => setToggle(false)}
                  className='dropdown_link'
                  href='/profile'
                >
                  My profile
                </Link>
                <Link
                  onClick={() => setToggle(false)}
                  className='dropdown_link'
                  href='/create-prompt'
                >
                  Create Prompt
                </Link>
                <button
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                  type='button'
                  className='w-full mt-5 black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import { FooterTop } from "./components/footer-top";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import google from "../../assets/images/google-play.webp"
import app from "../../assets/images/app-store.webp"
import Image from "next/image";
import { FacebookIcon } from "@/assets/icons/facebook-icon";
import { TwitterIcon } from "@/assets/icons/twitter-icon";
import { InstagramIcon } from "@/assets/icons/instagram-icon";
import Link from "next/link";
import Payments from "../../assets/images/payments.webp"

export const Footer = () => {
    return (
        <footer>
            <FooterTop />
            <div className="container">
                <div className="py-[46px] border-b-[1px] border-b-[#E4E5EE] flex items-center justify-between">
                    <div className="flex items-center gap-[15px]">
                        <div className="w-[42px] h-[42px] rounded-[100%] border-[1px] flex items-center justify-center"><PhoneIcon /></div>
                        <div>
                            <a className="text-[20px] mb-[3px] font-semibold" href="#">8 800 555-55</a>
                            <p className="text-[11px] text-[#ACAEB4]">Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <div>
                            <p className="text-[14px] font-semibold">Download App on Mobile :</p>
                            <p className="text-[#ACAEB4] text-[12px]">15% discount on your first purchase</p>
                        </div>
                        <div className="flex gap-[5px]">
                            <a target="_blank" href="https://play.google.com/store/games?device=windows&pli=1"> <Image src={google} alt="image" /></a>
                            <a target="_blank" href="https://www.apple.com/app-store/"><Image src={app} alt="image" /></a>
                        </div>
                        <div className="flex gap-[5px]">
                            <a className="text-[#233A95] w-[36px] h-[36px] rounded-[100%] border-[1px] flex items-center justify-center" target="_blank" href="https://www.facebook.com/"><FacebookIcon /></a>
                            <a className="text-[#233A95] w-[36px] h-[36px] rounded-[100%] border-[1px] flex items-center justify-center" target="_blank" href="https://x.com/"><TwitterIcon /></a>
                            <a className="text-[#233A95] w-[36px] h-[36px] rounded-[100%] border-[1px] flex items-center justify-center" target="_blank" href="https://www.instagram.com/"><InstagramIcon /></a>
                        </div>
                    </div>
                </div>
                <div className="py-[30px] flex items-center justify-between">
                    <p className="text-[12px] text-[#ACAEB4]">Copyright 2024 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>
                    <div className="flex items-center gap-[20px]">
                        <div className="flex gap-[15px]">
                            <Link className="text-[12px] text-[#ACAEB4]" href={"/privacy"}>Privacy Policy</Link>
                            <Link className="text-[12px] text-[#ACAEB4]" href={"/privacy"}>Terms and Conditions</Link>
                            <Link className="text-[12px] text-[#ACAEB4]" href={"/"}>Cookie</Link>
                        </div>
                        <div>
                            <Link href={"/"}><Image src={Payments} alt="image"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
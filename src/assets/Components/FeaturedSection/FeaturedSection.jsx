import React from 'react';

export default function FeaturedSection() {
    return (
        <div class=" w-full my-5 px-4 pt-16 pb-16 xl:grid grid-cols-[1fr_2fr] bg-gray-100" id="faq">
                <h2 class=" text-4xl p-5 font-bold text-center">Featured in:</h2>

                <div
                    class=" bg-gray-100 mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://logowik.com/content/uploads/images/the-ken3642.logowik.com.webp" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://play-lh.googleusercontent.com/JFJFLKKIYMbBpwK8iD5maFR_YABUxBHGjvjfnT9abGBCWhbN3CeK6YZxVkDeCks3hw" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://images.seeklogo.com/logo-png/44/1/inc42-logo-png_seeklogo-449938.png" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://yt3.ggpht.com/a-/AAuE7mDZ7SL5oKXTZs_NurZtv_mvXY7Mm893f0DAoQ=s900-mo-c-c0xffffffff-rj-k-no" />
                    </a>
                    {/* <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443206/brand-line.svg" />
                    </a>
                    <a target="_blank" href="">
                        <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/519278/slack.svg" />
                    </a> */}
                </div>
            </div>
    );
}

import React from 'react'

const LogoScroll = () => {
  return (
    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
     className="w-full mx-w-[2560px] pt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img className='w-[60px] h-[60px]' src="https://i.pinimg.com/236x/71/4a/af/714aaf04e8121573a8cfb89d35030615.jpg" alt="Volkswagen" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/6e/d4/d7/6ed4d7da41fc086258d5499e9a3cfbe8.jpg" alt="Toyota " />
        </li>
        <li>
            <img className='w-[40px] h-[40px]' src="https://i.pinimg.com/236x/bb/8a/22/bb8a22af120485e71602305b6fbeef59.jpg" alt="BMW" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/e3/08/43/e30843035992d7638651407eb1115e10.jpg" alt="Audi" />
        </li>
        <li>
            <img className='w-[50px] h-[40px]' src="https://i.pinimg.com/236x/59/a5/26/59a526a3f6146549714f829936da41b4.jpg" alt="Nissan " />
        </li>
        <li>
            <img className='w-[40px] h-[40px]' src=" https://i.pinimg.com/236x/87/15/84/871584460d639c1ae9fd23c8891a7f8c.jpg" alt="Lamborghini " />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/e8/04/4c/e8044c0c5bd453c366246fa11bc67fb9.jpg" alt="MINI" />
        </li>
        <li>
            <img className='w-[30px] h-[30px]' src="https://i.pinimg.com/236x/0b/cf/8f/0bcf8f9471abc4066e41dc5aa0c462c3.jpg" alt="Porsche 911" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/5f/d7/54/5fd754ce796229170266b0a5f9ff008c.jpg" alt="ford" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/71/9d/7a/719d7a7d75f47fb34e356810f0e1dc88.jpg" alt="mazda" />
        </li>
    </ul>     
    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img className='w-[60px] h-[60px]' src="https://i.pinimg.com/236x/71/4a/af/714aaf04e8121573a8cfb89d35030615.jpg" alt="Volkswagen" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/6e/d4/d7/6ed4d7da41fc086258d5499e9a3cfbe8.jpg" alt="Toyota " />
        </li>
        <li>
            <img className='w-[40px] h-[40px]' src="https://i.pinimg.com/236x/bb/8a/22/bb8a22af120485e71602305b6fbeef59.jpg" alt="BMW" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/e3/08/43/e30843035992d7638651407eb1115e10.jpg" alt="Audi" />
        </li>
        <li>
            <img className='w-[50px] h-[40px]' src="https://i.pinimg.com/236x/59/a5/26/59a526a3f6146549714f829936da41b4.jpg" alt="Nissan " />
        </li>
        <li>
            <img className='w-[40px] h-[40px]' src=" https://i.pinimg.com/236x/87/15/84/871584460d639c1ae9fd23c8891a7f8c.jpg" alt="Lamborghini " />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/e8/04/4c/e8044c0c5bd453c366246fa11bc67fb9.jpg" alt="MINI" />
        </li>
        <li>
            <img className='w-[30px] h-[30px]' src="https://i.pinimg.com/236x/0b/cf/8f/0bcf8f9471abc4066e41dc5aa0c462c3.jpg" alt="Porsche 911" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/5f/d7/54/5fd754ce796229170266b0a5f9ff008c.jpg" alt="ford" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/71/9d/7a/719d7a7d75f47fb34e356810f0e1dc88.jpg" alt="mazda" />
        </li>
    </ul>  
    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img className='w-[60px] h-[60px]' src="https://i.pinimg.com/236x/71/4a/af/714aaf04e8121573a8cfb89d35030615.jpg" alt="Volkswagen" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/6e/d4/d7/6ed4d7da41fc086258d5499e9a3cfbe8.jpg" alt="Toyota " />
        </li>
        <li>
            <img className='w-[40px] h-[40px]' src="https://i.pinimg.com/236x/bb/8a/22/bb8a22af120485e71602305b6fbeef59.jpg" alt="BMW" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/e3/08/43/e30843035992d7638651407eb1115e10.jpg" alt="Audi" />
        </li>
        <li>
            <img className='w-[50px] h-[40px]' src="https://i.pinimg.com/236x/59/a5/26/59a526a3f6146549714f829936da41b4.jpg" alt="Nissan " />
        </li>
        <li>
            <img className='w-[40px] h-[40px]' src=" https://i.pinimg.com/236x/87/15/84/871584460d639c1ae9fd23c8891a7f8c.jpg" alt="Lamborghini " />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/e8/04/4c/e8044c0c5bd453c366246fa11bc67fb9.jpg" alt="MINI" />
        </li>
        <li>
            <img className='w-[30px] h-[30px]' src="https://i.pinimg.com/236x/0b/cf/8f/0bcf8f9471abc4066e41dc5aa0c462c3.jpg" alt="Porsche 911" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/5f/d7/54/5fd754ce796229170266b0a5f9ff008c.jpg" alt="ford" />
        </li>
        <li>
            <img className='w-[70px] h-[70px]' src="https://i.pinimg.com/236x/71/9d/7a/719d7a7d75f47fb34e356810f0e1dc88.jpg" alt="mazda" />
        </li>
    </ul>                                     
</div>
  )
}

export default LogoScroll
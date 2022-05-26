import React, { FC, ReactElement, useEffect, useRef } from 'react'
import classes from './NoiseEffect.module.scss'

interface INoiseEffect {
    opacity?: string,
    children: ReactElement | ReactElement[]
}

const NoiseEffect: FC<INoiseEffect> = ({ opacity = 1, children }) => {
    const canvas: any = useRef(),
        blockHeight: any = useRef();

    useEffect(() => {
        const ctx: CanvasRenderingContext2D = canvas.current.getContext('2d')

        canvas.current.width = canvas.current.height = 128

        const resize = () => {
            canvas.current.width = blockHeight.current.clientWidth * window.devicePixelRatio / 1
            canvas.current.height = blockHeight.current.clientHeight * window.devicePixelRatio / 1
        }

        resize();
        window.onresize = resize;

        const noise = (ctx: CanvasRenderingContext2D) => {

            const w = ctx.canvas.width,
                h = ctx.canvas.height,
                iData = ctx.createImageData(w, h),
                buffer32 = new Uint32Array(iData.data.buffer),
                len = buffer32.length
            let i = 1

            for (; i < len; i++)

                if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

            ctx.putImageData(iData, 0, 0);
        }

        (function loop() {
            noise(ctx);
            // requestAnimationFrame(loop);
        })();
    }, [])

    return (
        <div ref={blockHeight} className={classes.noise_effect}>
            <canvas ref={canvas} className={classes.noise_effect_canvas}
                style={{ opacity: `${opacity}` }}></canvas>
            {children}
        </div>

    )
}

export default NoiseEffect
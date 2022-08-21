import { prisma } from "$lib/server/prisma";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => {
    const image = await prisma.image.findUnique({
        where: { imageID: `${params.imageID}` },
        select: { name: true, publicUrl: true, author: true },
    });

    if (!image) {
        return new Response(null, { status: 404, statusText: "Not Found" });
    }

    return new Response(JSON.stringify(image), {
        headers: { "Content-Type": "application/json" },
    });
};

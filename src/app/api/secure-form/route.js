import { NextResponse } from "next/server"

export const runtime = "nodejs"

const ENDPOINTS = Object.freeze({
  "form-01": "https://script.google.com/macros/s/AKfycbw8m7r6p8zv8-9yjiWiN6iNDaYq0JyDtTsuMVnZD5oE__NC1483gX0MxWH76z00zMscYg/exec",
  "form-02": "https://script.google.com/macros/s/AKfycbw9xo18SXBJncMIuD-YF7dOVxh-v1eVewpeUn4jYiXdFB5HGOjNLvE4YR1Z5tz8P644/exec",
  "form-03": "https://script.google.com/macros/s/AKfycbwCXkTQ0_Im3HNKhMUEBVw_niwH-AJiHxBY0ooPQw8qiFQyrWRGi_ienr2atqQdOIsi-w/exec",
  "form-04": "https://script.google.com/macros/s/AKfycbwjSeWQGqPFAWD4IlQiKwwyycb1JxyGFcC3EVkWrKoAIw6Z7vv0fS0TM9OyNrbZTCsM/exec",
  "form-05": "https://script.google.com/macros/s/AKfycbwMOzqcz9VUo09dgmVkQMsBrdMqb5d7CxRiE-DdXO70oA5CeFeTAwPrRgyQ5fb3YOI/exec",
  "form-06": "https://script.google.com/macros/s/AKfycbwMYK_xcqC5kgD8371kp8fGRQmu0eJ4wMQDPeDBNhvtT6L0_QmKoyzQx0HcALbuW29wdA/exec",
  "form-07": "https://script.google.com/macros/s/AKfycbwNG-58NXdvuUPPRFpI0wyXlbD27i_7Q2mgZtiVHOWv70h-3PTzg4mzhh_eJnhSobFu/exec",
  "form-08": "https://script.google.com/macros/s/AKfycbwSOgoGilyJP2CGDQ4P7o-goLaDifmEz7Pvznd2vHsKU_aOAll9z98FVe7y2AV28jpF/exec",
  "form-09": "https://script.google.com/macros/s/AKfycbwVC_wFzlXaVRbMGrkZhRaQAVGr83cCitKrQwAa4YO8ssd3v7Y-XYoy1vmluddGBTtxGg/exec",
  "form-10": "https://script.google.com/macros/s/AKfycbwYOiRQBCshIMrEwYDRk47_AIKZSjZtcLJTplBY212evJivI57zL0HiBw7xFN70YJsh/exec",
  "form-11": "https://script.google.com/macros/s/AKfycbx4zi7EYx_Q0vA6-VTFHXHSWfsVJcfUPxF3CzImoQr3FBtCKWsv5WXNYKdRUsFnJz2X5Q/exec",
  "form-12": "https://script.google.com/macros/s/AKfycbx7Vq03rv5opBBFlR-Puc7IvUMgDOumGBMFBaYir5uD_0p1NSCQe5M-cLx6eTHyMrma/exec",
  "form-13": "https://script.google.com/macros/s/AKfycbxC4JrtE_hY7BfL1TMJz3lXIbLmACfaVER6NWqPm0F8p2yx1V37-AElw6zA9Vd7iYHn/exec",
  "form-14": "https://script.google.com/macros/s/AKfycbxdHilzIxMy79xZeDSifPLBCG-s9fqv2oRYpzPfWYCdOQpFo6eTaSBr7_nsz7a-aDQdXg/exec",
  "form-15": "https://script.google.com/macros/s/AKfycbxeaQj8NkOgv_1dmLTvga-ceYLyHFK6LwQmmh9o4p1TzNG0GeroR0-2Y6Yp4PVO5fuv/exec",
  "form-16": "https://script.google.com/macros/s/AKfycbxGDBvXOji8jirgC_tVHaOTWkKzExfA3KXms1TFcQWLCz1UwkGlvkEtD6BVqzNG0hZfUw/exec",
  "form-17": "https://script.google.com/macros/s/AKfycbxhAUyRvdnq_ZShEIK9s-F9EkjWYMDuRKa8a2Ij_7_10CXTl6q3QsSx9Nb437UBOev2/exec",
  "form-18": "https://script.google.com/macros/s/AKfycbxIY2Y95WRCpgU3DS0i7CTe2j7ZxSFArEyoqZinmY2ZZbq-Xn4JoPzaT4qritbSy1UE/exec",
  "form-19": "https://script.google.com/macros/s/AKfycbxLMOgB7_-CJ37UkG1EjbC_z_HSVzA1bmJ3fwHUvRU2lTSlX4-CTRYOyiv_3DE_OAw_CA/exec",
  "form-20": "https://script.google.com/macros/s/AKfycbxrieqUvCrWw-d8HyN1pnV8_QVEUYPggUPAkwheGGtwZCsfJXFAbw6Z-tlNrkD-VjHi4w/exec",
  "form-21": "https://script.google.com/macros/s/AKfycbxSltaqVvhtgxzTyRsM9-kLWb732Ftl2ZYIj3lZbvpmBOIAqWlxGCJbnJTzyRDZiHvX-A/exec",
  "form-22": "https://script.google.com/macros/s/AKfycbxTpE6RTvyxIt6DWLoiJXY6lBGuC4OGlaArmWvjOw23tNsvlslVu3utNQWql_heb2kj/exec",
  "form-23": "https://script.google.com/macros/s/AKfycby_sYukN1TwrOvYYACSTt3Fhg4ti5OIHxqdSP63rhXa6SR-095WqhaSmmvnBcJtZ9xwSA/exec",
  "form-24": "https://script.google.com/macros/s/AKfycby7AR-E1wtxUB8FcuL7wvGwmbCj7v2On5D8fPy7GemsBAILx94GT3rW0TfU5qTg7V6_6A/exec",
  "form-25": "https://script.google.com/macros/s/AKfycbyKZMxYtdIlCBrLxAK9jzoOAmDVduF47Ur_6AUtocSQygIDMYAipW1QyuS0QdQH1SVK/exec",
  "form-26": "https://script.google.com/macros/s/AKfycbynHkN3OsBiGtD16h0gGR22ltsoU1XbgNjSv4VZck8dybgLExVgZUzY7iz6wAUNyd2f/exec",
  "form-27": "https://script.google.com/macros/s/AKfycbyQekpY_6eqeNDyKgei05hviRUliST-tevZWcZihOyFDrM-cTICzP2lafF7T4Mb_hA/exec",
  "form-28": "https://script.google.com/macros/s/AKfycbyRSOgw-YRenJ_oqcHwUDgiD59LM-wweZ44fwSTdPzQNGpHeV516mxtgt85O7ur0xLn/exec",
  "form-29": "https://script.google.com/macros/s/AKfycbz4ot3lPKtrN5-5DmzYBpXrQdtRxsBh2RR1YjELfkmxlsgRSXc1IrhqYWgO9IhWrgrnxg/exec",
  "form-30": "https://script.google.com/macros/s/AKfycbz7bI_C4kfpBPt5tMkop405NqVDZIL4tkVarm7iF1SK4Lm6yOTJfXvSL7JRzcdeqsgELw/exec",
  "form-31": "https://script.google.com/macros/s/AKfycbz7Cxk8l4c-V_JqSffHVZFUcyJPaIuR057s7HgdJDqROrWe8ySgZ6hckmjNs22aNQGK/exec",
  "form-32": "https://script.google.com/macros/s/AKfycbzEqPTXSRjW9AcHJjO9yh73C0InzO1mnE_yyMAO5MWG-rrvv8KK7vXKvUI-cQLyVUvO/exec",
  "form-33": "https://script.google.com/macros/s/AKfycbzgnVl8Njn0t_2w6W2SoiuYDAq0nE9Htn7WSsKjuK2srgUE23JyRJSYVydhhVIM4qHa/exec",
  "form-34": "https://script.google.com/macros/s/AKfycbzjmTyHnFox-ovqkSpGEwLWddSilSjlLVs71zhpVYIQQ6UAVXHNTWxqYARGPw1KQmAi/exec",
  "form-35": "https://script.google.com/macros/s/AKfycbznejyevVIEAGM7DUmnJDkdiXKonSoyERF9WBinZOSnNjowzpBq5dHvuaND5dkz8fm9/exec",
  "form-36": "https://script.google.com/macros/s/AKfycbzO7cskea5KKHGVdqDwmp8q7yAO3bBUe8ARGOjhc2YTZQl7JxayYyEqBuMhsLHbwYWq/exec",
  "form-37": "https://script.google.com/macros/s/AKfycbzOjoubol9HQUfw01yDMMCB_SGGkcjbck0VIq8XxcIEHH7BXkRg5ueas1hKnRLhQSjz/exec",
  "form-38": "https://script.google.com/macros/s/AKfycbzRY6oES6sELtNFdMag6XKmKDYwXHdjQ_O2xUpWljS7n_COAgij4JLvFlAxy9k4KIQh9g/exec",
  "form-39": "https://script.google.com/macros/s/AKfycbzYJXxmbG70qvgsII2I0nBcKTyS_1UIZHScmF4VGHECM3Ku9sTDIGfLD7KVHvV0NiYL/exec",
})

function jsonError(message, status) {
  return NextResponse.json({ error: message }, { status, headers: { "Cache-Control": "no-store" } })
}

export async function POST(request) {
  const origin = request.headers.get("origin")
  const requestUrl = new URL(request.url)
  let originUrl
  try {
    originUrl = origin ? new URL(origin) : null
  } catch {
    return jsonError("Invalid request origin.", 403)
  }
  if (!originUrl || originUrl.host !== requestUrl.host) {
    return jsonError("Invalid request origin.", 403)
  }

  const formId = request.headers.get("x-form-id")
  const endpoint = Object.hasOwn(ENDPOINTS, formId) ? ENDPOINTS[formId] : null
  if (!endpoint) {
    return jsonError("Invalid form destination.", 400)
  }

  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return jsonError("Security verification is not configured.", 503)
  }

  const contentLength = Number(request.headers.get("content-length") || 0)
  if (contentLength > 64 * 1024) {
    return jsonError("Form submission is too large.", 413)
  }

  let formData
  try {
    formData = await request.formData()
  } catch {
    return jsonError("Invalid form submission.", 400)
  }

  const token = formData.get("cf-turnstile-response")
  if (typeof token !== "string" || token.length === 0) {
    return jsonError("Security verification is required.", 400)
  }
  formData.delete("cf-turnstile-response")

  let verification
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
    })
    if (!response.ok) return jsonError("Security verification is unavailable.", 502)
    verification = await response.json()
  } catch (error) {
    console.error("Cloudflare Turnstile verification request failed.", error)
    return jsonError("Security verification is unavailable.", 502)
  }

  if (!verification.success || verification.hostname !== originUrl.hostname) {
    return jsonError("Security verification failed. Please try again.", 403)
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      body: formData,
      cache: "no-store",
    })
    const body = await upstream.text()
    let status = upstream.status
    try {
      if (JSON.parse(body).success === false) status = 502
    } catch {
      // Some Apps Script deployments return non-JSON responses.
    }
    return new Response(body || null, {
      status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("Protected form delivery failed.", error)
    return jsonError("Could not submit the form. Please try again.", 502)
  }
}

export async function load({ request }) {
	const userAgent = request.headers.get("user-agent");
	const desktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

	return { desktop };
}

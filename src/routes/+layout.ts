export async function load() {
	const res = await fetch('https://api.github.com/orgs/race-tech', {
		headers: {
			Accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	return {
		organization: await res.json()
	};
}

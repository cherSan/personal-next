const Page = () => (
    <main style={{ textAlign: 'center', marginTop: '20vh' }}>
        <h1>🚧 Under Maintenance</h1>
        <p>{process.env.MAINTENANCE_MESSAGE ?? 'We’ll be back soon.'}</p>
        <p>Expected back: {process.env.MAINTENANCE_UNTIL ?? 'unknown'}</p>
    </main>
);

Page.displayName = "MAINTENANCE";

export default Page;
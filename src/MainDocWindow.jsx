export default function MainDocWindow() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Proposal: AI Research Initiative</h1>

      <p>
        This document outlines the goals, methodology, and expected outcomes of
        the <strong>AI Research Initiative</strong> for the 2025 fiscal year.
        Depending on the current mode, users can <b>edit</b> content directly,
        <b> suggest </b> improvements, or simply <b>view</b> the finalized
        version.
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">1. Project Overview</h2>
        <p>
          Artificial intelligence continues to transform industries worldwide.
          Our objective is to expand research efforts in applied AI ethics,
          autonomous systems, and large-scale model optimization.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">2. Goals and Deliverables</h2>
        <ul className="list-disc list-inside">
          <li>Publish two peer-reviewed papers by Q3.</li>
          <li>Develop a prototype ethical decision-making module.</li>
          <li>Host an internal AI safety symposium.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">3. Collaboration and Feedback</h2>
        <p>
          In <b>Editing Mode</b>, you can modify this text directly.  
          In <b>Suggesting Mode</b>, your proposed edits will appear as tracked
          changes for review.  
          In <b>Viewing Mode</b>, the document is locked and read-only.
        </p>
      </section>
    </main>
  );
}

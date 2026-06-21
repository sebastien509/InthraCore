// src/pages/SadsPilot.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pilotData } from '../data/pilotData';


export default function SadsPilot() {
  const { companySlug } = useParams();
  const data = pilotData[companySlug];

  const [checklist, setChecklist] = useState(
    data?.checklist?.map(() => false) || []
  );

  const [signature, setSignature] = useState({
    signature: '',
    printedName: '',
    title: '',
    date: '',
  });

  const [acceptChecked, setAcceptChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (data?.checklist) {
      setChecklist(data.checklist.map(() => false));
    }

    setSignature({
      signature: '',
      printedName: '',
      title: '',
      date: '',
    });

    setAcceptChecked(false);
    setSubmitted(false);
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-900 mb-2">
            Pilot documentation not found
          </h1>
          <p className="text-gray-500">
            Please check the company slug or return to the SADS program page.
          </p>
        </div>
      </div>
    );
  }

  const toggleCheckbox = (index) => {
    const newList = [...checklist];
    newList[index] = !newList[index];
    setChecklist(newList);
  };

  const handleSignatureChange = (field, value) => {
    setSignature((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      company: data.companyName,
      slug: companySlug,
      formType: 'pilot-signoff',
      ...signature,
      accept: acceptChecked,
      checklist: data.checklist.map((item, idx) => ({
        item: item.label,
        owner: item.owner,
        checked: checklist[idx] || false,
      })),
    };

    try {
      const res = await fetch('https://formspree.io/f/xldlbrny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch {
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderTable = (headers = [], rows = [], className = '') => (
    <div className={`overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-100">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm text-gray-700 align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F7F7F3] py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl py-8 px-4 sm:px-6">
        <div className="border-b border-gray-200 pb-4 mb-6 flex flex-wrap justify-between items-start gap-6">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900">
              Pilot Technical Documentation
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              SADS Accelerator – Inaugural Cohort
            </p>
          </div>

          <div className="text-sm text-gray-600 text-left sm:text-right">
            <p>
              <span className="font-semibold">Company:</span>{' '}
              {data.companyName}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {data.date}
            </p>
            <p>
              <span className="font-semibold">Version:</span> {data.version}
            </p>
            <p>
              <span className="font-semibold">Prepared by:</span>{' '}
              InthraOS Engineering &amp; SADS Program Team
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="bg-emerald-50 border-l-4 border-emerald-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-emerald-900 mb-2">
            What This Means for {data.companyName}
          </h2>

          <p className="text-gray-700 mb-4">
            {data.executiveSummary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-2xl font-bold text-emerald-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">In plain language:</span>{' '}
              {data.plainLanguage}
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900 flex flex-wrap items-center gap-2">
            1. Pilot Overview
            <span className="text-sm font-medium bg-emerald-700 text-white px-3 py-0.5 rounded-full">
              6–10 weeks
            </span>
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Defining the regulated workflow, buyer, data, and compliance framework.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            1.1 Regulated Workflow
          </h3>

          {renderTable(
            ['Field', 'Description'],
            data.workflow.map((row) => [row.field, row.description])
          )}

          <h3 className="text-lg font-semibold mt-8 mb-3">
            1.2 Success Metrics (Pilot Scorecard)
          </h3>

          {renderTable(
            ['KPI', 'Baseline', 'Target', 'Measurement Method'],
            data.metrics.map((row) => [
              row.kpi,
              row.baseline,
              row.target,
              row.method,
            ])
          )}
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            2. InthraOS OSDK Integration
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            {data.osdkIntro}
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.1 Model Deployment &amp; API Keys
          </h3>

          {renderTable(
            ['Model / Service', 'Purpose', 'API Key Required?', 'Provider'],
            data.models.map((row) => [
              row.model,
              row.purpose,
              row.apiKey,
              row.provider,
            ])
          )}

          <div className="bg-gray-50 border-l-4 border-emerald-700 p-4 rounded mt-3 text-sm text-gray-700">
            <strong>Why this matters:</strong> {data.modelsWhy}
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">
            2.2 OSDK Core Components
          </h3>

          {renderTable(
            ['Component', 'Purpose', 'Configuration'],
            data.osdkComponents.map((row) => [
              row.component,
              row.purpose,
              row.config,
            ])
          )}
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            3. Privacy Router Configuration
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Data minimisation, safe routing, and consent enforcement.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.1 Data Minimisation Rules
          </h3>

          {renderTable(
            ['Rule ID', 'Data Type', 'Action', 'Condition'],
            data.privacyRules.map((row) => [
              row.id,
              row.dataType,
              row.action,
              row.condition,
            ])
          )}

          <div className="bg-gray-50 border-l-4 border-emerald-700 p-4 rounded mt-3 text-sm text-gray-700">
            <strong>Why this matters:</strong> {data.privacyWhy}
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">
            3.2 Safe Routing Rules
          </h3>

          {renderTable(
            ['Rule ID', 'Source', 'Destination', 'Constraint'],
            data.routingRules.map((row) => [
              row.id,
              row.source,
              row.destination,
              row.constraint,
            ])
          )}
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            4. Enterprise Control Plane – Policies &amp; Compliance
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Deterministic enforcement of regulatory requirements.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            4.1 Policy Enforcement
          </h3>

          {renderTable(
            ['Policy ID', 'Scope', 'Rule', 'Enforcement Action'],
            data.policies.map((row) => [
              row.id,
              row.scope,
              row.rule,
              row.action,
            ])
          )}

          <div className="bg-gray-50 border-l-4 border-emerald-700 p-4 rounded mt-3 text-sm text-gray-700">
            <strong>Why this matters:</strong> {data.policiesWhy}
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">
            4.2 Compliance Mappings
          </h3>

          {renderTable(
            ['Framework', 'Requirement', 'Implemented Via'],
            data.compliance.map((row) => [
              row.framework,
              row.requirement,
              row.implemented,
            ])
          )}
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            5. Integration Points &amp; Infrastructure
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            The OSDK wraps existing infrastructure.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            5.1 Current Architecture
          </h3>

          {renderTable(
            ['Component', 'Technology', 'Owner'],
            data.architecture.map((row) => [
              row.component,
              row.technology,
              row.owner,
            ])
          )}

          <h3 className="text-lg font-semibold mt-8 mb-3">
            5.2 OSDK Integration Points
          </h3>

          {renderTable(
            ['Integration Point', 'Purpose', 'OSDK Component', 'Priority'],
            data.integrationPoints.map((row) => [
              row.point,
              row.purpose,
              row.component,
              row.priority,
            ])
          )}

          <div className="bg-gray-50 border-l-4 border-emerald-700 p-4 rounded mt-3 text-sm text-gray-700">
            <strong>Why this matters:</strong> {data.integrationWhy}
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            6. Complete API of Outcomes
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Receipts, compliance docs, and cost planning.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            6.1 Control Plane Receipts
          </h3>

          <p className="text-sm text-gray-600 mb-3">
            Every action produces a cryptographic receipt, including:
          </p>

          {renderTable(
            ['Receipt Field', 'Description', 'Example'],
            data.receipts.map((row) => [
              row.field,
              row.description,
              row.example,
            ])
          )}

          <h3 className="text-lg font-semibold mt-8 mb-3">
            6.2 Compliance Documentation (Auto-generated)
          </h3>

          {renderTable(
            ['Document', 'Frequency', 'Format', 'Access'],
            data.complianceDocs.map((row) => [
              row.doc,
              row.freq,
              row.format,
              row.access,
            ])
          )}

          <h3 className="text-lg font-semibold mt-8 mb-3">
            6.3 AI Cost Planning &amp; Management
          </h3>

          {renderTable(
            ['Cost Category', 'Tracking Method', 'Alert Threshold'],
            data.costCategories.map((row) => [
              row.category,
              row.method,
              row.threshold,
            ])
          )}

          <div className="bg-gray-50 border-l-4 border-emerald-700 p-4 rounded mt-3 text-sm text-gray-700">
            <strong>Why this matters:</strong> {data.costWhy}
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            7. Accountability, Predictability &amp; Compliance
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            How the OSDK guarantees trust, performance, and regulatory readiness.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            7.1 Accountability
          </h3>

          {renderTable(
            ['Capability', 'How OSDK Enables It'],
            data.accountability.map((row) => [
              row.capability,
              row.how,
            ])
          )}

          <h3 className="text-lg font-semibold mt-8 mb-3">
            7.2 Predictability
          </h3>

          {renderTable(
            ['Dimension', 'OSDK Contribution'],
            data.predictability.map((row) => [
              row.dimension,
              row.contribution,
            ])
          )}

          <h3 className="text-lg font-semibold mt-8 mb-3">
            7.3 Compliance
          </h3>

          {renderTable(
            ['Requirement', 'OSDK Implementation'],
            data.complianceSummary.map((row) => [
              row.requirement,
              row.implementation,
            ])
          )}
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            8. Next Steps &amp; Kickoff Checklist
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Clear action items with owners and deadlines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.checklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 border-b border-gray-100"
              >
                <input
                  type="checkbox"
                  checked={checklist[idx] || false}
                  onChange={() => toggleCheckbox(idx)}
                  className="w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />

                <span className="text-sm text-gray-700">
                  {item.label}
                </span>

                <span className="text-xs text-gray-400 ml-auto">
                  {item.owner}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            <strong>Deadline:</strong> {data.deadline}
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-emerald-900">
            9. Contact &amp; Support
          </h2>

          {renderTable(
            ['Role', 'Name', 'Email'],
            data.contacts.map((row) => [
              row.role,
              row.name,
              row.email,
            ])
          )}
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-0">
          <h2 className="text-2xl font-bold text-emerald-900">
            10. Document Sign-off
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Please complete this section to confirm your acceptance.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-300 rounded-lg p-6 text-center">
              <p className="text-green-800 font-semibold text-lg">
                ✓ Acceptance submitted successfully!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Thank you for signing the pilot documentation. We will proceed
                with the kickoff.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="company"
                value={data.companyName}
              />

              <input
                type="hidden"
                name="slug"
                value={companySlug}
              />

              <input
                type="hidden"
                name="formType"
                value="pilot-signoff"
              />

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Acceptance by {data.companyName}
                </h3>

                <p className="text-xs text-gray-500 mb-4">
                  I have read, understood, and agree to the terms of this Pilot
                  Documentation. I confirm that {data.companyName} will
                  participate in the SADS Accelerator and commit to the program
                  requirements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Signature (type full name)
                    </label>

                    <input
                      type="text"
                      name="signature"
                      required
                      value={signature.signature}
                      onChange={(e) =>
                        handleSignatureChange('signature', e.target.value)
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Printed Name
                    </label>

                    <input
                      type="text"
                      name="printedName"
                      required
                      value={signature.printedName}
                      onChange={(e) =>
                        handleSignatureChange('printedName', e.target.value)
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="Enter your printed name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>

                    <input
                      type="text"
                      name="title"
                      required
                      value={signature.title}
                      onChange={(e) =>
                        handleSignatureChange('title', e.target.value)
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="Enter your title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      required
                      value={signature.date}
                      onChange={(e) =>
                        handleSignatureChange('date', e.target.value)
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="acceptCheck"
                  checked={acceptChecked}
                  onChange={(e) => setAcceptChecked(e.target.checked)}
                  required
                  className="mt-1 w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />

                <label
                  htmlFor="acceptCheck"
                  className="text-sm text-gray-700"
                >
                  I accept the terms and conditions of this Pilot Documentation.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Acceptance'}
              </button>
            </form>
          )}
        </section>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-400">
          <p className="mb-1">
            This document is confidential and subject to the Mutual NDA. It
            contains proprietary information of InthraOS and {data.companyName}.
            Do not distribute outside the SADS cohort.
          </p>

          <p className="mt-2">
            <strong className="text-gray-600">SADS Accelerator</strong> –
            Powered by InthraOS
            <br />
            <a
              href="https://inthracore.com/sads"
              className="text-emerald-700 hover:underline"
            >
              Program details
            </a>
            {' '}
            &middot;
            {' '}
            <a
              href="mailto:context@inthraos.com"
              className="text-emerald-700 hover:underline"
            >
              Contact team
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
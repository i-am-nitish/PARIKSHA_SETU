import { useState } from "react";

export default function ContributionPage() {
  const [showFileUpload, setShowFileUpload] = useState(true);
  
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-900">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contribution Form</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Share your educational resources with the community. Your contributions help others succeed.
        </p>
      </div>

      <form className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 md:p-8 max-w-5xl mx-auto border border-gray-100 dark:border-gray-700">
        {/* Deliberately uneven layout with mixed grid layouts */}
        <div className="border-b dark:border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">1️⃣ Contributor Information</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Full width item */}
            <div className="col-span-3 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">We need your full name for proper attribution of your contribution</p>
            </div>
            
            {/* Two column items */}
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Your email will be used for verification and sending updates</p>
            </div>
            
            <div className="col-span-1 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Optional contact method</p>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profile Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option value="">Select...</option>
                <option>Student</option>
                <option>Teacher</option>
                <option>Mentor</option>
                <option>Subject Expert</option>
                <option>Other</option>
              </select>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Choose what best describes you</p>
            </div>
            
            <div className="col-span-3 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn Profile URL</label>
              <input type="url" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Adding your profile helps establish credibility</p>
            </div>
            
            <div className="col-span-4 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Institution/Organization</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">School, college or coaching center you're affiliated with</p>
            </div>
          </div>
        </div>

        {/* Resource Details with asymmetrical layout */}
        <div className="border-b dark:border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">2️⃣ Resource Details</h2>
          
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title of Resource</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">A concise, descriptive title that clearly indicates what the resource is about</p>
            </div>
            
            <div className="w-3/5 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
              <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Detailed information about what this resource contains and how it can be used</p>
            </div>
            
            <div className="w-2/5 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Keywords/Tags</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Comma-separated words that help in searching (e.g. UPSC, Geography, Maps)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Exam</label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option value="">Select exam...</option>
                <option>UPSC</option>
                <option>SSC</option>
                <option>Banking</option>
                <option>State PSCs</option>
                <option>Railways</option>
                <option>Other</option>
              </select>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Choose which exam this resource is targeted for</p>
            </div>
            
            <div className="col-span-1 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Difficulty Level</label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option value="">Select...</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">How challenging is this content</p>
            </div>
            
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Topic/Chapter</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Specific chapter or concept covered</p>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Relevant Subjects</label>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center">
                <input id="math" type="checkbox" className="h-4 w-4 text-blue-600" />
                <label htmlFor="math" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Math</label>
              </div>
              <div className="flex items-center">
                <input id="science" type="checkbox" className="h-4 w-4 text-blue-600" />
                <label htmlFor="science" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Science</label>
              </div>
              <div className="flex items-center">
                <input id="history" type="checkbox" className="h-4 w-4 text-blue-600" />
                <label htmlFor="history" className="ml-2 text-sm text-gray-700 dark:text-gray-300">History</label>
              </div>
              <div className="flex items-center">
                <input id="geography" type="checkbox" className="h-4 w-4 text-blue-600" />
                <label htmlFor="geography" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Geography</label>
              </div>
              <div className="flex items-center">
                <input id="polity" type="checkbox" className="h-4 w-4 text-blue-600" />
                <label htmlFor="polity" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Polity</label>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Select all applicable subjects for better categorization</p>
          </div>
        </div>
        
        {/* File Upload Section with uneven layout */}
        <div className="border-b dark:border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">3️⃣ File Upload & Input Options</h2>
          
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center">
              <input 
                id="file-upload"
                type="radio"
                name="content-type"
                checked={showFileUpload}
                onChange={() => setShowFileUpload(true)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="file-upload" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Upload File</label>
            </div>
            <div className="flex items-center">
              <input 
                id="text-input"
                type="radio"
                name="content-type"
                checked={!showFileUpload}
                onChange={() => setShowFileUpload(false)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="text-input" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Text Input</label>
            </div>
          </div>
          
          {showFileUpload ? (
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 mb-4">
                <div className="flex items-center justify-center h-32 px-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800">
                  <div className="text-center">
                    <svg className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" />
                    </svg>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400">Upload a file</span> or drag and drop
                    </p>
                    <input type="file" className="hidden" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX, PPT, TXT, JPEG, PNG (Max 50MB)</p>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Upload your resource file in a compatible format</p>
              </div>
              
              <div className="col-span-1 mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Image</label>
                <input type="file" accept="image/*" className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Add a visual representation of your content</p>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <textarea rows={6} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Enter your resource content directly here if you don't have a file to upload</p>
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">External Links</label>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4">
                <input type="url" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="https://..." />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Add a link to content hosted elsewhere (Google Drive, YouTube, etc.)</p>
              </div>
              <div className="col-span-2">
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <option>Google Drive</option>
                  <option>YouTube</option>
                  <option>GitHub</option>
                  <option>Other</option>
                </select>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Source platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Authenticity with uneven layout */}
        <div className="border-b dark:border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">4️⃣ Content Authenticity & Verification</h2>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Source</label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <option value="">Select...</option>
                <option>Self-Created</option>
                <option>NCERT Reference</option>
                <option>Coaching Notes</option>
                <option>Other</option>
              </select>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Where this content originated from</p>
            </div>
            
            <div className="col-span-3 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Is this content already available online?</label>
              <div className="flex items-center mt-1 space-x-6">
                <div className="flex items-center">
                  <input id="online-yes" name="online-content" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="online-yes" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Yes</label>
                </div>
                <div className="flex items-center">
                  <input id="online-no" name="online-content" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="online-no" className="ml-2 text-sm text-gray-700 dark:text-gray-300">No</label>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Help us avoid duplicating content that's already freely available</p>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">References & Citations</label>
            <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">List any sources, books, or materials referenced in creating this content</p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center">
              <input id="copyright" type="checkbox" className="h-4 w-4 text-blue-600" required />
              <label htmlFor="copyright" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I confirm I have the rights to share this content or it's freely available for educational use
              </label>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Required to ensure content doesn't violate copyright laws</p>
          </div>
        </div>

        {/* Usage Rights with uneven layout */}
        <div className="border-b dark:border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">5️⃣ Usage Rights & Permissions</h2>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Who Can Access?</label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input id="access-public" name="access" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="access-public" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Public</label>
                </div>
                <div className="flex items-center">
                  <input id="access-registered" name="access" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="access-registered" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Registered Users</label>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Who should be able to see this content</p>
            </div>
            
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Usage Permissions</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input id="perm-read" type="checkbox" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="perm-read" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Read-Only</label>
                </div>
                <div className="flex items-center">
                  <input id="perm-download" type="checkbox" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="perm-download" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Allow Download</label>
                </div>
                <div className="flex items-center">
                  <input id="perm-modify" type="checkbox" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="perm-modify" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Allow Modifications</label>
                </div>
                <div className="flex items-center">
                  <input id="perm-share" type="checkbox" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="perm-share" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Allow Sharing</label>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Define what users can do with your content</p>
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Allow Comments?</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input id="comments-yes" name="comments" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="comments-yes" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Yes</label>
                </div>
                <div className="flex items-center">
                  <input id="comments-no" name="comments" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="comments-no" className="ml-2 text-sm text-gray-700 dark:text-gray-300">No</label>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Whether users can comment on your contribution</p>
            </div>
            
            <div className="w-2/3 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Special Instructions</label>
              <textarea rows={2} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Any additional guidance for users of this resource</p>
            </div>
          </div>
        </div>

        {/* Agreement section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">6️⃣ Contributor Agreement</h2>
          
          <div className="flex items-start mb-4">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" className="h-4 w-4 text-blue-600" required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                I agree to the Terms and Conditions
              </label>
              <p className="text-gray-500 dark:text-gray-400">I acknowledge my contribution is for educational purposes and grant permission to publish it</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Would you like credit?</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input id="credit-yes" name="credit" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="credit-yes" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Yes</label>
                </div>
                <div className="flex items-center">
                  <input id="credit-no" name="credit" type="radio" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="credit-no" className="ml-2 text-sm text-gray-700 dark:text-gray-300">No (anonymous)</label>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Whether to display your name with this contribution</p>
            </div>
            
            <div className="flex items-end mb-4 justify-end">
              <button type="submit" className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600">
                Submit Contribution
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
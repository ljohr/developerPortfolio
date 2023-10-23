import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css"

const StyleChecker = () => {
  return (
    <main>
      <div className="project-title">
        <div className="project-title-inner">
          <h1>C Style Checker</h1>
          <h3><span className="highlighter">Python</span></h3>
        </div>
        <a href="https://github.com/ljohr/c-style-checker" target="_blank"><FontAwesomeIcon icon={ faGithub } /></a>
      </div>
      <p>This is a python script which checks whether a C program conforms to the style guideline found in the all_rules.txt file.</p>

      <h2>Demo</h2>

      <div className="demo-vid">
        <video width="800" height="450" controls>
          <source src="https://github.com/ljohr/c-style-checker/assets/46297075/0f08dfbd-8292-49e4-baba-bffec11bac42" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <h2>Usage</h2>
      <code>python style_checker.py file_name.c</code>

      <h2>Style Guide</h2>
      <p>The styling guideline followed is specified in the all_rules.txt file which was based on the Google C++ Style Guide. The list of rules found in this text file have been written and compiled by Professor Amittai Aviram at Boston College.</p>

      <h2>Code Structure</h2>
      <p>The code is organized eight styling checker classes, one main checker class (coordinates how styling checker classes are run), and a main section at the end (runs the script). Basic descriptions are provided by class, but please see All Rules section for a complete list of what is checked by this script.</p>

      <h3><code>BaseChecker</code> Class</h3>
      <ul>
          <li><code>check_styles</code>: This method breaks down user input line by line, strips unnecessary whitespace, and sends each line to each style checker for analysis. This method also handles error counting.</li>
      </ul>

      <h3>Style Checker Classes Common Methods</h3>
      <ul>
          <li>All style checker classes have at least two methods called <code>check_styles</code> and <code>count_errors</code></li>
          <li><code>check_styles</code>: Method that handles main style checking</li>
          <li><code>count_errors</code>: Method that counts all errors generated in the class</li>
      </ul>

      <h3><code>NameCommentChecker</code> Class</h3>
      <ul>
          <li>Checks if author, email, and the keyword "Author" is found</li>
          <li>Operates on the basis that the "Author" comment will be within the first 10 lines of the file</li>
          <li>Searches for a opening comment (either <code>/*</code> or <code>//</code>)
              <ul>
                  <li>When comment_found == True searches for the keyword "Author" and "@" ("Author" can be lowercase or uppercase)</li>
              </ul>
          </li>
      </ul>

      <h3><code>NamingChecker</code> Class</h3>
      <ul>
          <li>Makes sure variables and functions are in snake_case</li>
          <li>Reports an error if variable and function names are too long (over 7 characters)</li>
          <li>Reports an error if variable and function names are single letters (exceptions: i, j, k, n, m)</li>
      </ul>

      <h3><code>LineLengthChecker</code> Class</h3>
      <ul>
          <li>Reports an error if a line exceeds 120 characters</li>
          <li>Adds a warning to the output file if a line exceeds 80 characters</li>
      </ul>

      <h3><code>IncludeDirectiveChecker</code> Class</h3>
      <ul>
          <li>Checks the first 100 lines to check header #include directives</li>
          <li>Checks if custom project headers are after standard library headers</li>
          <li>Checks if standard library headers are in alphabetical order</li>
          <li>Checks if custom library headers are in alphabetical order</li>
      </ul>

      <h3><code>IndentationChecker</code> Class</h3>
      <ul>
          <li>Checks if all indentations are multiples of 4 spaces at the correct indentation level</li>
          <li>Checks for tabs</li>
          <li>Checks for lines that are comments and skips</li>
          <li>Note: indentation is NOT counted inside a switch statement to prevent errors (Manual check necessary)</li>
      </ul>

      <h3><code>BlocksChecker</code> Class</h3>
      <ul>
          <li>Checks if a given code block always begins with an open curly brace and ends with a close curly brace</li>
      </ul>

      <h3><code>HorizontalSpaceChecker</code> Class</h3>
      <ul>
          <li>Checks that one space character is inserted in the right positions</li>
          <li>Checks that no space character is inserted in the right positions</li>
          <li>Each condition is checked for using regular expressions organized by type</li>
          <li>Note: negative numbers and the minus sign cannot be differentiated, so all negative numbers will be noted as an error (warning message provided)</li>
      </ul>

      <h3><code>VerticalSpaceChecker</code> Class</h3>
      <ul>
          <li>Checks that vertical spaces are provided in the right places</li>
      </ul>

      <h3><code>file_checker()</code> Function</h3>
      <ul>
          <li>Checks that file specified by the user is a C file and then checks if the file exists.</li>
      </ul>

      <h3><code>main()</code> Section</h3>
      <ul>
          <li>Runs the program</li>
          <li>Organizes the output and error count into ordered dictionaries to preserve the specified order (Necessary as this program is made compatible with Python 2.7)</li>
          <li>Style checkers are organized into an array</li>
          <li>The base_checker is called on the array of style checkers</li>
          <li>The error messages (output dictionary) and error count are written to the output text file line by line</li>
          <li>For a given input file named <code>user_file.c</code>, the output file takes the format <code>user_file_style_info.txt</code></li>
      </ul>

      <p>For a comprehensive list of all rules, please check the all_rules.txt file</p>
    </main>
  )
}

export default StyleChecker;
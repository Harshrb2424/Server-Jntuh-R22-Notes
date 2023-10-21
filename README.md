# Server-Jntuh-R22-Notes

This repository contains a Node.js application that dynamically displays notes based on the data provided in `data.json`. The server is built using Express, and the templating engine EJS is used to render the notes dynamically. The notes are linked from the `resources` folder.

## Preview

A live preview of this application is available at [https://harshrb2424.github.io/Jntuh-R22-Notes/](https://harshrb2424.github.io/Jntuh-R22-Notes/).

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Harshrb2424/Server-Jntuh-R22-Notes.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Server-Jntuh-R22-Notes
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node index.js
    ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Preview Repository - [Jntuh-R22-Notes](https://github.com/Harshrb2424/Jntuh-R22-Notes)

The preview repository [Jntuh-R22-Notes](https://github.com/Harshrb2424/Jntuh-R22-Notes) serves as the static page for the Server-Jntuh-R22-Notes application. It's hosted on [GitHub Pages](https://pages.github.com/) and provides a live demonstration of the notes.

For any further assistance or issues, please feel free to open an [issue](https://github.com/Harshrb2424/Server-Jntuh-R22-Notes/issues) in this repository.

## Configuration
### Changing Custom Styling

Custom styling for the application can be modified by editing the `public/styles.css` file. Update the styles according to your preferences.

### Updating `data.json`

The `data.json` file contains information about the notes to be displayed. Customize this file according to your requirements. Each entry in the array represents a note with properties such as `subjectName`, `info`, `topic` and `link`.

```json
{
    "years": [
        {
            "year": "Year I",
            "sems": [
                {
                    "sem": "Sem I",
                    "calender": "",
                    "subjects": {
                        "theorySubjects": [
                            {
                                "subjectName": "Matrices",
                                "code": "CO101",
                                "info": [
                                    {
                                        "name": "Unit-1",
                                        "code": "U1",
                                        "info": [
                                          {
                                            "topic": ""
                                          },
                                          {
                                            "topic": "",
                                            "subtopics": [
                                            ]
                                          }
                                        ],
                                        "link": "./public/resources/1st Year/Unit1.pdf"
                                      },
                                      {
                                        "name": "Unit-2",
                                        "code": "U2",
                                        "info": [
                                          {
                                            "topic": "",
                                            "subtopics": [
                                            ]
                                          }
                                        ],
                                        "link": "./public/resources/1st Year/Unit2.pdf"
                                      }
                                ],
                                "otherLinks": [
                                    {"name": "Bits Questions", "link": "./public/resources/1st Year/bits.pdf"},
                                    {"name": "Importent Questions", "link": "./public/resources/1st Year/imp-questions.pdf"}
                                ]
                            },
                            {
                              "subjectName": "Physics",
                              "code": "CO102",
                              "info": [
                                  {
                                      "name": "Unit-1",
                                      "code": "U1",
                                      "info": [
                                        {
                                          "topic": ""
                                        },
                                        {
                                          "topic": "",
                                          "subtopics": [
                                          ]
                                        }
                                      ],
                                      "link": "./public/resources/1st Year/Unit1.pdf"
                                    },
                                    {
                                      "name": "Unit-2",
                                      "code": "U2",
                                      "info": [
                                        {
                                          "topic": "",
                                          "subtopics": [
                                          ]
                                        }
                                      ],
                                      "link": "./public/resources/1st Year/Unit2.pdf"
                                    }
                              ],
                              "otherLinks": [
                                  {"name": "Bits Questions", "link": "./public/resources/1st Year/bits.pdf"},
                                  {"name": "Importent Questions", "link": "./public/resources/1st Year/imp-questions.pdf"}
                              ]
                          }
                        ],
                        "practicalSubjects": [
                            {
                                "subjectName": "Engineering Workshop",
                                "code": "CO104",
                                "info": [
                                  {
                                    "name": "Trades and Exercises",
                                    "code": "TE",
                                    "info": [
                                      {
                                        "topic": "Carpentry",
                                        "subtopics": [
                                          "T-Lap Joint",
                                          "Mortise & Tenon Joint"
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "otherLinks": [
                                    {"name": "", "link": ""},
                                    {"name": "", "link": ""}
                                ]
                            }
                        ]
                    }

                }
            ]
        }
    ]
}
```




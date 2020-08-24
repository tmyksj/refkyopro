# AtCoder Beginner Contest 166
## F - Three Variables Game
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, a, b, c;
    cin >> n >> a >> b >> c;

    vector<string> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    vector<string> res(n, "-");
    for (int i = 0, ia = a, ib = b, ic = c; i < n; i++) {
        if (s[i] == "AB") {
            if (ia == 0 && ib == 0) {
                res[0] = "x";
                break;
            } else if (ia == 0) {
                res[i] = "A";
                ia++;
                ib--;
            } else if (ib == 0) {
                res[i] = "B";
                ia--;
                ib++;
            } else if (i < n - 1 && (s[i + 1] == "AB" || s[i + 1] == "AC")) {
                res[i] = "A";
                ia++;
                ib--;
            } else {
                res[i] = "B";
                ia--;
                ib++;
            }
        } else if (s[i] == "AC") {
            if (ia == 0 && ic == 0) {
                res[0] = "x";
                break;
            } else if (ia == 0) {
                res[i] = "A";
                ia++;
                ic--;
            } else if (ic == 0) {
                res[i] = "C";
                ia--;
                ic++;
            } else if (i < n - 1 && (s[i + 1] == "AB" || s[i + 1] == "AC")) {
                res[i] = "A";
                ia++;
                ic--;
            } else {
                res[i] = "C";
                ia--;
                ic++;
            }
        } else {
            if (ib == 0 && ic == 0) {
                res[0] = "x";
                break;
            } else if (ib == 0) {
                res[i] = "B";
                ib++;
                ic--;
            } else if (ic == 0) {
                res[i] = "C";
                ib--;
                ic++;
            } else if (i < n - 1 && (s[i + 1] == "AB" || s[i + 1] == "BC")) {
                res[i] = "B";
                ib++;
                ic--;
            } else {
                res[i] = "C";
                ib--;
                ic++;
            }
        }
    }

    if (res[0] == "x") {
        cout << "No" << endl;
    } else {
        cout << "Yes" << endl;
        for (int i = 0; i < n; i++) {
            cout << res[i] << endl;
        }
    }
}
```

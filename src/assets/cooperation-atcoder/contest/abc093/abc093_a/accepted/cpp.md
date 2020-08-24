# AtCoder Beginner Contest 093
## A - abc of ABC
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    sort(s.begin(), s.end());

    cout << (s == "abc" ? "Yes" : "No") << endl;
}
```

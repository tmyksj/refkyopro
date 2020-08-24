# Tenka1 Programmer Beginner Contest
## A - Measure
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    if (s.size() == 3) {
        reverse(s.begin(), s.end());
    }

    cout << s << endl;
}
```

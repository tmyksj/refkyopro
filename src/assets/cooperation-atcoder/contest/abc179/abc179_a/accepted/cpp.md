# AtCoder Beginner Contest 179
## A - Plural Form
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    cout << s << (s[s.size() - 1] == 's' ? "es" : "s") << endl;
}
```

# AtCoder Beginner Contest 146
## B - ROT N
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        s[i] = ((s[i] - 'A' + n) % 26) + 'A';
    }

    cout << s << endl;
}
```

# AtCoder Beginner Contest 017
## B - choku語
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string x;
    cin >> x;

    bool res = true;
    for (int i = 0; i < static_cast<int>(x.size()); ) {
        if (i + 1 < static_cast<int>(x.size()) && x[i] == 'c' && x[i + 1] == 'h') {
            i += 2;
        } else if (x[i] == 'o' || x[i] == 'k' || x[i] == 'u') {
            i += 1;
        } else {
            res = false;
            break;
        }
    }

    cout << (res ? "YES" : "NO") << endl;
}
```

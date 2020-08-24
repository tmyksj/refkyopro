# AtCoder Beginner Contest 059
## A - Three-letter acronym
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s1, s2, s3;
    cin >> s1 >> s2 >> s3;
    cout << static_cast<char>(s1[0] - 'a' + 'A')
            << static_cast<char>(s2[0] - 'a' + 'A')
            << static_cast<char>(s3[0] - 'a' + 'A') << endl;
}
```
